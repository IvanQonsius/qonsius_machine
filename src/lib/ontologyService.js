// lib/ontologyService.js
import prisma from '../../lib/prisma'

export function listConceptsForUser(userId) {
  return prisma.concept.findMany({
    where: { conceptOwnerId: userId }
  })
}

export function createConceptForUser(userId, data) {
  return prisma.concept.create({
    data: { ...data, conceptOwnerId: userId }
  })
}

export function updateConcept(id, data) {
  return prisma.concept.update({
    where: { id },
    data
  })
}

export function deleteConcept(id) {
  return prisma.concept.delete({
    where: { id }
  })
}
