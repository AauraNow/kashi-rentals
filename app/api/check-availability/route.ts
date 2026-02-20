import { NextRequest, NextResponse } from 'next/server';

// Mock availability check endpoint
// In production, replace with actual FastAPI backend call
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { vehicleType, location, startDate, endDate } = body;

    // Validate inputs
    if (!vehicleType || !location || !startDate || !endDate) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mock response - in production, call FastAPI backend
    // Example: const response = await fetch('https://api.varanasibikerental.com/check-availability', {...})

    const mockResponse = {
      available: true,
      vehicleType,
      location,
      startDate,
      endDate,
      pricing: {
        dailyRate: vehicleType === 'scooty' ? 299 : 499,
        totalDays: calculateDays(startDate, endDate),
        totalAmount: calculateTotal(vehicleType, startDate, endDate),
        deposit: 1000,
      },
      vehicles: [
        {
          id: '1',
          model: vehicleType === 'scooty' ? 'Honda Activa 6G' : 'Royal Enfield Classic 350',
          year: '2023',
          registrationNumber: 'UP 65 XX XXXX',
        },
        {
          id: '2',
          model: vehicleType === 'scooty' ? 'TVS Jupiter' : 'Honda CB Shine',
          year: '2023',
          registrationNumber: 'UP 65 YY YYYY',
        },
      ],
    };

    return NextResponse.json(mockResponse, { status: 200 });
  } catch (error) {
    console.error('Availability check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

function calculateDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays || 1;
}

function calculateTotal(vehicleType: string, startDate: string, endDate: string): number {
  const days = calculateDays(startDate, endDate);
  const dailyRate = vehicleType === 'scooty' ? 299 : 499;

  // Apply discounts for longer rentals
  let discount = 0;
  if (days >= 30) discount = 0.30; // 30% off for monthly
  else if (days >= 7) discount = 0.15; // 15% off for weekly

  const total = days * dailyRate * (1 - discount);
  return Math.round(total);
}
