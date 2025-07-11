import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validation des données requises
    const { prenom, nom, email, message } = body
    
    if (!prenom || !nom || !email || !message) {
      return NextResponse.json(
        { error: 'Les champs prénom, nom, email et message sont obligatoires' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      )
    }

    // Créer la demande de contact
    const contactRequest = await prisma.contactRequest.create({
      data: {
        prenom: prenom.trim(),
        nom: nom.trim(),
        adresse: body.adresse?.trim() || null,
        ville: body.ville?.trim() || null,
        email: email.trim().toLowerCase(),
        telephone: body.telephone?.trim() || null,
        message: message.trim(),
        status: 'nouveau'
      }
    })

    return NextResponse.json(
      { 
        message: 'Demande de contact envoyée avec succès',
        id: contactRequest.id
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Erreur lors de la création de la demande de contact:', error)
    
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Récupérer toutes les demandes de contact (pour l'admin)
    const contactRequests = await prisma.contactRequest.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(contactRequests)
  } catch (error) {
    console.error('Erreur lors de la récupération des demandes:', error)
    
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
} 