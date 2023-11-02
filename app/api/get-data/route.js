import { NextResponse, NextRequest } from 'next/server';




export async function GET(req, res) {

    const  Data  = 'App Data';

    console.log(Data);
    return NextResponse.json({ Data }, { status: 200 });

}