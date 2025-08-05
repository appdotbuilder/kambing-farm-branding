import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    farmInfo?: {
        id: number;
        title: string;
        description: string;
        history?: string;
        location?: string;
        phone?: string;
        email?: string;
        vision?: string;
        mission?: string;
    };
    goatTypes?: Array<{
        id: number;
        name: string;
        description: string;
        image?: string;
        characteristics?: string;
        weight_range_min?: number;
        weight_range_max?: number;
    }>;
    galleryItems?: Array<{
        id: number;
        title: string;
        description?: string;
        image: string;
        category: string;
    }>;
    latestArticles?: Array<{
        id: number;
        title: string;
        excerpt: string;
        category: string;
        published_at: string;
        featured_image?: string;
    }>;
    [key: string]: unknown;
}

export default function Welcome({ farmInfo, goatTypes = [], galleryItems = [], latestArticles = [] }: Props) {
    return (
        <>
            <Head title="Peternakan Kambing Berkah Jaya" />
            
            <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
                {/* Navigation */}
                <nav className="bg-white shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex items-center">
                                <h1 className="text-xl font-bold text-green-800">🐐 {farmInfo?.title || 'Peternakan Kambing'}</h1>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Link href="#tentang" className="text-gray-700 hover:text-green-800">Tentang</Link>
                                <Link href="#jenis-kambing" className="text-gray-700 hover:text-green-800">Jenis Kambing</Link>
                                <Link href="#galeri" className="text-gray-700 hover:text-green-800">Galeri</Link>
                                <Link href="#artikel" className="text-gray-700 hover:text-green-800">Artikel</Link>
                                <Link href="/login">
                                    <Button variant="outline" size="sm">Login</Button>
                                </Link>
                                <Link href="/register">
                                    <Button size="sm" className="bg-green-600 hover:bg-green-700">Daftar</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            🌟 {farmInfo?.title || 'Peternakan Kambing Modern'}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            {farmInfo?.description || 'Peternakan kambing berkualitas tinggi dengan teknologi modern dan standar internasional'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700">
                                📞 Hubungi Kami
                            </Button>
                            <Button variant="outline" size="lg">
                                📖 Pelajari Lebih Lanjut
                            </Button>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="tentang" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">🏡 Tentang Peternakan Kami</h2>
                                <p className="text-gray-600 mb-6">
                                    {farmInfo?.history || 'Peternakan kami telah berdiri selama bertahun-tahun dengan komitmen untuk menghasilkan kambing berkualitas tinggi.'}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-green-50 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600">500+</div>
                                        <div className="text-sm text-gray-600">Kambing Sehat</div>
                                    </div>
                                    <div className="text-center p-4 bg-green-50 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600">15</div>
                                        <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                                    </div>
                                    <div className="text-center p-4 bg-green-50 rounded-lg">  
                                        <div className="text-2xl font-bold text-green-600">6</div>
                                        <div className="text-sm text-gray-600">Jenis Kambing</div>
                                    </div>
                                    <div className="text-center p-4 bg-green-50 rounded-lg">
                                        <div className="text-2xl font-bold text-green-600">100%</div>
                                        <div className="text-sm text-gray-600">Organik</div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                                <span className="text-gray-500 text-lg">📷 Foto Peternakan</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Goat Types Section */}
                <section id="jenis-kambing" className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">🐐 Jenis-Jenis Kambing Kami</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Kami memelihara berbagai jenis kambing unggul dengan karakteristik dan keunggulan masing-masing
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {goatTypes.map((goat) => (
                                <div key={goat.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                                        {goat.image ? (
                                            <img src={`/storage/${goat.image}`} alt={goat.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-gray-500 text-4xl">🐐</span>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{goat.name}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{goat.description}</p>
                                        {goat.weight_range_min && goat.weight_range_max && (
                                            <div className="text-sm text-green-600 font-medium">
                                                Berat: {goat.weight_range_min} - {goat.weight_range_max} kg
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/goat-types">
                                <Button className="bg-green-600 hover:bg-green-700">
                                    Lihat Semua Jenis Kambing →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section id="galeri" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">📸 Galeri Peternakan</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Lihat aktivitas sehari-hari di peternakan kami dan kondisi terkini fasilitas peternakan
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {galleryItems.slice(0, 8).map((item) => (
                                <div key={item.id} className="relative group overflow-hidden rounded-lg">
                                    <div className="aspect-square bg-gray-200 flex items-center justify-center">
                                        {item.image ? (
                                            <img src={`/storage/${item.image}`} alt={item.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-gray-500 text-2xl">📷</span>
                                        )}
                                    </div>
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
                                        <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity px-2 text-center">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                                Lihat Galeri Lengkap →
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Articles Section */}
                <section id="artikel" className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">📰 Artikel & Berita Terbaru</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Baca artikel terbaru tentang tips perawatan kambing, teknologi peternakan, dan berita industri
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {latestArticles.map((article) => (
                                <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                                        {article.featured_image ? (
                                            <img src={`/storage/${article.featured_image}`} alt={article.title} className="w-full h-full object-cover" />
                                        ) : (
                                            <span className="text-gray-500 text-4xl">📄</span>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="text-xs text-green-600 font-medium mb-2 uppercase">{article.category}</div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                                        <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                                        <div className="text-xs text-gray-500">
                                            {new Date(article.published_at).toLocaleDateString('id-ID')}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <div className="text-center mt-8">
                            <Link href="/articles">
                                <Button className="bg-green-600 hover:bg-green-700">
                                    Baca Artikel Lainnya →
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-16 bg-green-800 text-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">📞 Hubungi Kami</h2>
                        <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                            Tertarik dengan kambing berkualitas kami? Hubungi kami untuk konsultasi dan pemesanan
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 mb-8">
                            <div>
                                <div className="text-2xl mb-2">📍</div>
                                <h3 className="font-semibold mb-1">Alamat</h3>
                                <p className="text-green-100 text-sm">{farmInfo?.location || 'Bogor, Jawa Barat'}</p>
                            </div>
                            <div>
                                <div className="text-2xl mb-2">📞</div>
                                <h3 className="font-semibold mb-1">Telepon</h3>
                                <p className="text-green-100 text-sm">{farmInfo?.phone || '+62 21 8765 4321'}</p>
                            </div>
                            <div>
                                <div className="text-2xl mb-2">✉️</div>
                                <h3 className="font-semibold mb-1">Email</h3>
                                <p className="text-green-100 text-sm">{farmInfo?.email || 'info@peternakan.com'}</p>
                            </div>
                        </div>
                        <Button size="lg" className="bg-white text-green-800 hover:bg-gray-100">
                            💬 WhatsApp Kami
                        </Button>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-8">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <p className="text-gray-400">
                            © 2024 {farmInfo?.title || 'Peternakan Kambing Berkah Jaya'}. All rights reserved.
                        </p>
                        <div className="mt-4">
                            <Link href="/login" className="text-gray-400 hover:text-white mr-4">Admin Login</Link>
                            <Link href="/admin" className="text-gray-400 hover:text-white">Admin Panel</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}