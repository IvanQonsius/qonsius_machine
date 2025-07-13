'use client'

import { useState, useEffect } from 'react'

export default function OntologyManager() {
  const [concepts, setConcepts] = useState([])
  const [form, setForm] = useState({
    name: '',
    slug: '',
    description: '',
    synonyms: '',
  })
  const [editingId, setEditingId] = useState(null)

  // load concepts
  const load = async () => {
    const res = await fetch('/api/ontology')
    setConcepts(await res.json())
  }
  useEffect(() => { load() }, [])

  // handle create/update
  const handleSave = async () => {
    const payload = {
      name: form.name,
      slug: form.slug,
      description: form.description,
      synonyms: form.synonyms.split(',').map(s => s.trim()).filter(Boolean),
    }
    const url = editingId ? `/api/ontology/${editingId}` : '/api/ontology'
    const method = editingId ? 'PUT' : 'POST'

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    setEditingId(null)
    setForm({ name: '', slug: '', description: '', synonyms: '' })
    load()
  }

  // handle delete
  const handleDelete = async (id) => {
    if (!confirm('Delete this concept?')) return
    await fetch(`/api/ontology/${id}`, { method: 'DELETE' })
    load()
  }

  // start editing
  const startEdit = (c) => {
    setEditingId(c.id)
    setForm({
      name: c.name,
      slug: c.slug,
      description: c.description || '',
      synonyms: c.synonyms.join(', '),
    })
  }

  return (
    <div className="space-y-6">
      {/* Create / Edit Form */}
      <div className="border p-4 rounded bg-white">
        <h2 className="font-semibold mb-2">
          {editingId ? 'Edit Concept' : 'New Concept'}
        </h2>
        <div className="grid gap-2">
          <input
            className="border px-2 py-1 bg-white text-black placeholder-gray-500"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="border px-2 py-1  bg-white text-black placeholder-gray-500"
            placeholder="Slug"
            value={form.slug}
            onChange={e => setForm({ ...form, slug: e.target.value })}
          />
          <input
            className="border px-2 py-1  bg-white text-black placeholder-gray-500"
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
          />
          <input
            className="border px-2 py-1  bg-white text-black placeholder-gray-500"
            placeholder="Synonyms (comma-separated)"
            value={form.synonyms}
            onChange={e => setForm({ ...form, synonyms: e.target.value })}
          />
          <div className="flex space-x-2">
            <button
              className="bg-blue-600 text-white px-3 py-1 rounded"
              onClick={handleSave}
            >
              Save
            </button>
            {editingId && (
              <button
                className="text-gray-600 underline"
                onClick={() => {
                  setEditingId(null)
                  setForm({ name: '', slug: '', description: '', synonyms: '' })
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Concepts List */}
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Description</th>
            <th className="border px-2 py-1">Synonyms</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {concepts.map(c => (
            <tr key={c.id}>
              <td className="border px-2 py-1">{c.name}</td>
              <td className="border px-2 py-1">{c.description}</td>
              <td className="border px-2 py-1">{c.synonyms.join(', ')}</td>
              <td className="border px-2 py-1 space-x-2">
                <button
                  className="underline text-blue-600"
                  onClick={() => startEdit(c)}
                >
                  Edit
                </button>
                <button
                  className="underline text-red-600"
                  onClick={() => handleDelete(c.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
