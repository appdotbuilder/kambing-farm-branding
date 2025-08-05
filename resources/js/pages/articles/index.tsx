import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Props {
    articles: {
        data: Array<{
            id: number;
            title: string;
            slug: string;
            excerpt: string;
            category: string;
            published_at: string;
            featured_image?: string;
            user: {
                name: string;
            };
        }>;
        links: Array<{
            url?: string;
            label: string;
            active: boolean;
        }>;
    };
    categories: string[];
    currentCategory?: string;
    [key: string]: unknown;
}

export default function ArticlesIndex({ articles, categories, currentCategory }: Props) {
    return (
        <>
            <Head title="Artikel & Berita - Peternakan" />
            
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
                                <Link href="/goat-types" className="text-gray-700 hover:text-green-800">Jenis Kambing</Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-900 mb-4">📰 Artikel & Berita</h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Baca artikel terbaru tentang tips perawatan kambing, teknologi peternakan, dan berita industri
                            </p>
                        </div>

                        {/* Categories Filter */}
                        {categories.length > 0 && (
                            <div className="mb-8 flex flex-wrap justify-center gap-2">
                                <Link
                                    href="/articles"
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        !currentCategory
                                            ? 'bg-green-600 text-white'
                                            : 'bg-white text-gray-600 hover:bg-green-100'
                                    }`}
                                >
                                    Semua
                                </Link>
                                {categories.map((category) => (
                                    <Link
                                        key={category}
                                        href={`/articles?category=${category}`}
                                        className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                                            currentCategory === category
                                                ? 'bg-green-600 text-white'
                                                : 'bg-white text-gray-600 hover:bg-green-100'
                                        }`}
                                    >
                                        {category}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {articles.data.length > 0 ? (
                            <>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {articles.data.map((article) => (
                                        <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                                {article.featured_image ? (
                                                    <img src={`/storage/${article.featured_image}`} alt={article.title} className="w-full h-full object-cover" />
                                                ) : (
                                                    <span className="text-gray-500 text-4xl">📄</span>
                                                )}
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className="text-xs text-green-600 font-medium uppercase">{article.category}</span>
                                                    <span className="text-xs text-gray-500">
                                                        {new Date(article.published_at).toLocaleDateString('id-ID')}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-gray-500">Oleh {article.user.name}</span>
                                                    <Link
                                                        href={`/articles/${article.slug}`}
                                                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                                                    >
                                                        Baca Selengkapnya →
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {articles.links.length > 3 && (
                                    <div className="mt-8 flex justify-center">
                                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                            {articles.links.map((link, index) => (
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
                                <span className="text-8xl mb-6 block">📰</span>
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Belum Ada Artikel</h2>
                                <p className="text-gray-600 mb-6">
                                    {currentCategory 
                                        ? `Belum ada artikel dalam kategori "${currentCategory}"`
                                        : 'Artikel akan segera ditambahkan'
                                    }
                                </p>
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