import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';

interface Props {
    stats: {
        goat_types_count: number;
        gallery_items_count: number;
        articles_count: number;
        published_articles_count: number;
    };
    recentArticles: Array<{
        id: number;
        title: string;
        status: string;
        created_at: string;
        user: {
            name: string;
        };
    }>;
    [key: string]: unknown;
}

export default function AdminDashboard({ stats, recentArticles }: Props) {
    return (
        <AppShell>
            <Head title="Admin Dashboard - Peternakan Kambing" />
            
            <div className="p-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">🏠 Dashboard Admin</h1>
                    <p className="text-gray-600 mt-2">Kelola konten website peternakan kambing Anda</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <span className="text-2xl">🐐</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Jenis Kambing</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.goat_types_count}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <span className="text-2xl">📸</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Galeri</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.gallery_items_count}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                        <div className="flex items-center">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <span className="text-2xl">📄</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Artikel</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.articles_count}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                        <div className="flex items-center">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                                <span className="text-2xl">📰</span>
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Artikel Publish</p>
                                <p className="text-2xl font-bold text-gray-900">{stats.published_articles_count}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">⚡ Aksi Cepat</h2>
                        <div className="space-y-3">
                            <Link href="/admin/goat-types/create">
                                <Button className="w-full justify-start bg-green-600 hover:bg-green-700">
                                    <span className="mr-2">🐐</span>
                                    Tambah Jenis Kambing Baru
                                </Button>
                            </Link>
                            <Link href="/admin/articles/create">
                                <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                                    <span className="mr-2">📝</span>
                                    Tulis Artikel Baru
                                </Button>
                            </Link>
                            <Link href="/admin/gallery/create">
                                <Button className="w-full justify-start bg-purple-600 hover:bg-purple-700">
                                    <span className="mr-2">📸</span>
                                    Upload Foto Galeri
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button variant="outline" className="w-full justify-start">
                                    <span className="mr-2">👁️</span>
                                    Lihat Website
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">📊 Statistik Cepat</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Artikel Published</span>
                                <span className="font-semibold text-green-600">
                                    {stats.published_articles_count}/{stats.articles_count}
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                    className="bg-green-600 h-2 rounded-full" 
                                    style={{
                                        width: `${stats.articles_count > 0 ? (stats.published_articles_count / stats.articles_count) * 100 : 0}%`
                                    }}
                                ></div>
                            </div>
                            <div className="text-sm text-gray-500">
                                {stats.articles_count > 0 ? 
                                    `${Math.round((stats.published_articles_count / stats.articles_count) * 100)}% artikel telah dipublish` :
                                    'Belum ada artikel'
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Articles */}
                <div className="bg-white rounded-lg shadow-md">
                    <div className="p-6 border-b">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-900">📰 Artikel Terbaru</h2>
                            <Link href="/admin/articles">
                                <Button variant="outline" size="sm">
                                    Lihat Semua
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="p-6">
                        {recentArticles.length > 0 ? (
                            <div className="space-y-4">
                                {recentArticles.map((article) => (
                                    <div key={article.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900">{article.title}</h3>
                                            <p className="text-sm text-gray-600">
                                                Oleh {article.user.name} • {new Date(article.created_at).toLocaleDateString('id-ID')}
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                                article.status === 'published' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                                {article.status === 'published' ? 'Published' : 'Draft'}
                                            </span>
                                            <Link href={`/admin/articles/${article.id}/edit`}>
                                                <Button variant="outline" size="sm">
                                                    Edit
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <span className="text-4xl mb-4 block">📝</span>
                                <p className="text-gray-500 mb-4">Belum ada artikel</p>
                                <Link href="/admin/articles/create">
                                    <Button className="bg-green-600 hover:bg-green-700">
                                        Buat Artikel Pertama
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppShell>
    );
}