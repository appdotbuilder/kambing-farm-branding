<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\FarmInfo;
use App\Models\GalleryItem;
use App\Models\GoatType;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page with all content.
     */
    public function index()
    {
        $farmInfo = FarmInfo::first();
        $goatTypes = GoatType::active()->take(6)->get();
        $galleryItems = GalleryItem::active()->orderBy('sort_order')->take(8)->get();
        $latestArticles = Article::published()->latest('published_at')->take(3)->get();
        
        return Inertia::render('welcome', [
            'farmInfo' => $farmInfo,
            'goatTypes' => $goatTypes,
            'galleryItems' => $galleryItems,
            'latestArticles' => $latestArticles,
        ]);
    }
}