'use client'

import { useEffect, useState } from 'react'

export default function OntologyPage() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Form state for creating a new concept
  const [form, setForm] = useState({
    name: '',
    slug: '',
    description: '',
    synonyms: '', // comma‑separated
  })

  // Edit state
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState(form)

  // Fetch the user's concepts with detailed logging
  const fetchItems = async () => {
    console.log('🛫 fetching /api/ontology')
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/ontology')
      console.log('🛰 response status:', res.status, res.headers.get('content-type'))
      const text = await res.text()
      console.log('📨 raw response:', text)
      if (!res.ok) throw new Error(`Fetch failed (${res.status})`)
      const data = JSON.parse(text)
      console.log('📦 parsed JSON:', data)
      setItems(data)
    } catch (e) {
      console.error('Fetch error:', e)
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  // Create a new concept
  const handleCreate = async e => {
    e.preventDefault()
    console.log('🛫 creating concept', form)
    setError('')
    try {
      const payload = {
        name: form.name,
        slug: form.slug,
        description: form.description,
        synonyms: form.synonyms
          .split(',')
          .map(s => s.trim())
          .filter(Boolean),
      }
      const res = await fetch('/api/ontology', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      console.log('🛰 create status:', res.status)
      const text = await res.text()
      console.log('📨 create raw:', text)
      if (!res.ok) throw new Error(`Create failed (${res.status})`)
      const created = JSON.parse(text)
      console.log('📦 created object:', created)
      setItems(prev => [...prev, created])
      setForm({ name: '', slug: '', description: '', synonyms: '' })
    } catch (e) {
      console.error('Create error:', e)
      setError(e.message)
    }
  }

  // Start editing
  const startEdit = item => {
    setEditingId(item.id)
    setEditForm({
      name: item.name,
      slug: item.slug,
      description: item.description || '',
      synonyms: (item.synonyms || []).join(', '),
    })
  }

  // Submit edit
  const handleUpdate = async (e, id) => {
    e.preventDefault()
    console.log('🛫 updating concept', id, editForm)
    setError('')
    try {
      const payload = {
        name: editForm.name,
        slug: editForm.slug,
        description: editForm.description,
        synonyms: editForm.synonyms
          .split(',')
          .map(s => s.trim())
          .filter(Boolean),
      }
      const res = await fetch(`/api/ontology/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      console.log('🛰 update status:', res.status)
      const text = await res.text()
      console.log('📨 update raw:', text)
      if (!res.ok) throw new Error(`Update failed (${res.status})`)
      const updated = JSON.parse(text)
      console.log('📦 updated object:', updated)
      setItems(prev => prev.map(it => (it.id === id ? updated : it)))
      setEditingId(null)
    } catch (e) {
      console.error('Update error:', e)
      setError(e.message)
    }
  }

  // Delete a concept
  const handleDelete = async id => {
    if (!confirm('Delete this concept?')) return
    console.log('🛫 deleting concept', id)
    setError('')
    try {
      const res = await fetch(`/api/ontology/${id}`, {
        method: 'DELETE',
      })
      console.log('🛰 delete status:', res.status)
      const text = await res.text()
      console.log('📨 delete raw:', text)
      if (!res.ok) throw new Error(`Delete failed (${res.status})`)
      setItems(prev => prev.filter(it => it.id !== id))
    } catch (e) {
      console.error('Delete error:', e)
      setError(e.message)
    }
  }

  const filtered = items.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    (c.description || '').toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ padding: '1rem', maxWidth: 800, margin: '0 auto' }}>
      <h1>My Ontology</h1>

      {error && (
        <div style={{ color: 'red', marginBottom: '1rem' }}>
          Error: {error}
        </div>
      )}

      {loading && <div>Loading…</div>}

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search terms…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ width: '100%', padding: '0.5rem' }}
        />
      </div>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Create New Concept</h2>
        <form onSubmit={handleCreate} style={{ display: 'grid', gap: '0.5rem' }}>
          <input
            required
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            required
            placeholder="Slug"
            value={form.slug}
            onChange={e => setForm({ ...form, slug: e.target.value })}
          />
          <textarea
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
          <input
            placeholder="Synonyms (comma‑separated)"
            value={form.synonyms}
            onChange={e => setForm({ ...form, synonyms: e.target.value })}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Creating…' : 'Create'}
          </button>
        </form>
      </section>

      <section>
        <h2>Terms ({filtered.length})</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filtered.map(item =>
            editingId === item.id ? (
              <li key={item.id} style={{ marginBottom: '1rem' }}>
                <form
                  onSubmit={e => handleUpdate(e, item.id)}
                  style={{ display: 'grid', gap: '0.5rem' }}
                >
                  <input
                    required
                    value={editForm.name}
                    onChange={e =>
                      setEditForm({ ...editForm, name: e.target.value })
                    }
                  />
                  <input
                    required
                    value={editForm.slug}
                    onChange={e =>
                      setEditForm({ ...editForm, slug: e.target.value })
                    }
                  />
                  <textarea
                    value={editForm.description}
                    onChange={e =>
                      setEditForm({
                        ...editForm,
                        description: e.target.value,
                      })
                    }
                  />
                  <input
                    value={editForm.synonyms}
                    onChange={e =>
                      setEditForm({
                        ...editForm,
                        synonyms: e.target.value,
                      })
                    }
                  />
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => setEditingId(null)}>
                    Cancel
                  </button>
                </form>
              </li>
            ) : (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid #ddd',
                }}
              >
                <span>{item.name}</span>
                <span>
                  <button onClick={() => startEdit(item)}>Edit</button>{' '}
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </span>
              </li>
            )
          )}
        </ul>
      </section>
    </div>
  )
}
