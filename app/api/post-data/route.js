import { NextResponse, NextRequest } from 'next/server';




export async function POST(req, res) {

    const { Data } = await req.json();

    console.log(Data);
    return NextResponse.json({ Data }, { status: 200 });

}