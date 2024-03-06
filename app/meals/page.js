import Link from 'next/link';

export default function Meals(){
    const meals = [
        { id: 'm1', slug: 'burger', title: 'Burger' },
        { id: 'm2', slug: 'curry', title: 'Curry' },
        { id: 'm3', slug: 'dumplings', title: 'Dumplings' },
        { id: 'm4', slug: 'macncheese', title: 'Mac N\' Cheese' },
        { id: 'm5', slug: 'pizza', title: 'Pizza' }
    ];
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                Welcome to the Meals Page!
            </h1>
            <ul>
                { meals.map(meal => (
                    <li key={meal.id}>
                        <Link href={`/meals/${meal.slug}`}>{ meal.title }</Link>
                    </li>
                ))}
            </ul>
        </main>
    );
}