import Image from 'next/image';

export default function Performance() {
    return (
        <div>
            <h2>Performance Page!</h2>
            <div>
                <Image
                    src={'/performance.jpg'}
                    width={500}
                    height={500}
                    alt="Performance"
                />
            </div>
        </div>
    );
}
