"use client";
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function MealItem(){
    const params = useParams();
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                { params.slug }
            </h1>
            <Link href="/meals">Go Back</Link>
        </main>
    );
}