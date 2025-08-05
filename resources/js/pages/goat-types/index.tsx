import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Props {
    goatTypes: {
        data: Array<{
            id: number;
            name: string;
            description: string;
            image?: string;
            characteristics?: string;
            weight_range_min?: number;
            weight_range_max?: number;
        }>;
        links: Array<{
            url?: string;
            label: string;
            active: boolean;
        }>;
    };
    [key: string]: unknown;
}

export default function GoatTypesIndex({ goatTypes }: Props) {
    return (
        <>
            <Head title="Jenis-Jenis Kambing - Peternakan" />
            
            <div className="min-h-screen bg-gray-50">
                {/* Navigation */}
                <nav className="bg-white shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <Link href="/" className="text-xl font-bold text-green-800">🐐 Peternakan Kambing</Link>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Link href="/" className="text-gray-700 hover:text-green-800">Home</Link>
                                <Link href="/articles" className="text-gray-700 hover:text-green-800">Artikel</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">🐐 Jenis-Jenis Kambing Kami</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Kenali berbagai jenis kambing unggul yang kami pelihara dengan karakteristik dan keunggulan masing-masing
                            </p>
                        </div>

                        {goatTypes.data.length > 0 ? (
                            <>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {goatTypes.data.map((goat) => (
                                        <div key={goat.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                            <div className="h-64 bg-gray-200 flex items-center justify-center">
                                                {goat.image ? (
                                                    <img src={`/storage/${goat.image}`} alt={goat.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <span className="text-gray-500 text-6xl">🐐</span>
                                                )}
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{goat.name}</h3>
                                                <p className="text-gray-600 mb-4">{goat.description}</p>
                                                
                                                {goat.characteristics && (
                                                    <div className="mb-4">
                                                        <h4 className="font-medium text-gray-900 mb-2">Karakteristik:</h4>
                                                        <p className="text-sm text-gray-600">{goat.characteristics}</p>
                                                    </div>
                                                )}
                                                
                                                {goat.weight_range_min && goat.weight_range_max && (
                                                    <div className="bg-green-50 p-3 rounded-lg">
                                                        <span className="text-sm font-medium text-green-800">
                                                            ⚖️ Berat: {goat.weight_range_min} - {goat.weight_range_max} kg
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {goatTypes.links.length > 3 && (
                                    <div className="mt-8 flex justify-center">
                                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                            {goatTypes.links.map((link, index) => (
                                                <Link
                                                    key={index}
                                                    href={link.url || '#'}
                                                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                        link.active
                                                            ? 'z-10 bg-green-50 border-green-500 text-green-600'
                                                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                                    } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            ))}
                                        </nav>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-16">
                                <span className="text-8xl mb-6 block">🐐</span>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Belum Ada Jenis Kambing</h2>
                                <p className="text-gray-600 mb-6">Jenis kambing akan segera ditambahkan</p>
                                <Link href="/" className="text-green-600 hover:text-green-700 font-medium">
                                    ← Kembali ke Home
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p className="text-gray-400">© 2024 Peternakan Kambing Berkah Jaya. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
}