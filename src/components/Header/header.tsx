import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='bg-orange-800'>
            <nav>
                <div>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/performance'}>Performance</Link>
                    <Link href={'/reliability'}>Reliability</Link>
                    <Link href={'/scale'}>Scale</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
