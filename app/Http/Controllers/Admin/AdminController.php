<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\GalleryItem;
use App\Models\GoatType;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display the admin dashboard.
     */
    public function index()
    {
        $stats = [
            'goat_types_count' => GoatType::count(),
            'gallery_items_count' => GalleryItem::count(),
            'articles_count' => Article::count(),
            'published_articles_count' => Article::published()->count(),
        ];
        
        $recentArticles = Article::with('user')->latest()->take(5)->get();
        
        return Inertia::render('admin/dashboard', [
            'stats' => $stats,
            'recentArticles' => $recentArticles,
        ]);
    }
}