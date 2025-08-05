import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';

interface Props {
    goatTypes: {
        data: Array<{
            id: number;
            name: string;
            description: string;
            image?: string;
            weight_range_min?: number;
            weight_range_max?: number;
            status: string;
            created_at: string;
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
    const handleDelete = (id: number, name: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus jenis kambing "${name}"?`)) {
            router.delete(route('admin.goat-types.destroy', id));
        }
    };

    return (
        <AppShell>
            <Head title="Kelola Jenis Kambing - Admin" />
            
            <div className="p-6">
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">🐐 Kelola Jenis Kambing</h1>
                        <p className="text-gray-600 mt-2">Tambah, edit, dan kelola jenis-jenis kambing di peternakan</p>
                    </div>
                    <Link href="/admin/goat-types/create">
                        <Button className="bg-green-600 hover:bg-green-700">
                            <span className="mr-2">➕</span>
                            Tambah Jenis Kambing
                        </Button>
                    </Link>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    {goatTypes.data.length > 0 ? (
                        <>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Jenis Kambing
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Berat (kg)
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Dibuat
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {goatTypes.data.map((goat) => (
                                            <tr key={goat.id} className="hover:bg-gray-50">
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0 h-16 w-16">
                                                            {goat.image ? (
                                                                <img 
                                                                    className="h-16 w-16 rounded-lg object-cover" 
                                                                    src={`/storage/${goat.image}`} 
                                                                    alt={goat.name} 
                                                                />
                                                            ) : (
                                                                <div className="h-16 w-16 bg-gray-200 rounded-lg flex items-center justify-center">
                                                                    <span className="text-2xl">🐐</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{goat.name}</div>
                                                            <div className="text-sm text-gray-500 max-w-xs truncate">{goat.description}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {goat.weight_range_min && goat.weight_range_max 
                                                        ? `${goat.weight_range_min} - ${goat.weight_range_max}`
                                                        : '-'
                                                    }
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                        goat.status === 'active' 
                                                            ? 'bg-green-100 text-green-800' 
                                                            : 'bg-red-100 text-red-800'
                                                    }`}>
                                                        {goat.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {new Date(goat.created_at).toLocaleDateString('id-ID')}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <div className="flex justify-end space-x-2">
                                                        <Link href={`/admin/goat-types/${goat.id}/edit`}>
                                                            <Button variant="outline" size="sm">
                                                                ✏️ Edit
                                                            </Button>
                                                        </Link>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => handleDelete(goat.id, goat.name)}
                                                            className="text-red-600 hover:text-red-700 hover:border-red-300"
                                                        >
                                                            🗑️ Hapus
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            {/* Pagination */}
                            {goatTypes.links.length > 3 && (
                                <div className="bg-white px-4 py-3 border-t border-gray-200 sm:px-6">
                                    <div className="flex justify-center">
                                        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                            {goatTypes.links.map((link, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => link.url && router.get(link.url)}
                                                    disabled={!link.url}
                                                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                        link.active
                                                            ? 'z-10 bg-green-50 border-green-500 text-green-600'
                                                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                                    } ${!link.url ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-12">
                            <span className="text-6xl mb-4 block">🐐</span>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Belum ada jenis kambing</h3>
                            <p className="text-gray-500 mb-6">Mulai dengan menambahkan jenis kambing pertama</p>
                            <Link href="/admin/goat-types/create">
                                <Button className="bg-green-600 hover:bg-green-700">
                                    <span className="mr-2">➕</span>
                                    Tambah Jenis Kambing Pertama
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </AppShell>
    );
}