<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreGoatTypeRequest;
use App\Http\Requests\UpdateGoatTypeRequest;
use App\Models\GoatType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class GoatTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $goatTypes = GoatType::latest()->paginate(12);
        
        return Inertia::render('goat-types/index', [
            'goatTypes' => $goatTypes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/goat-types/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGoatTypeRequest $request)
    {
        $data = $request->validated();
        
        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('goat-types', 'public');
        }

        GoatType::create($data);

        return redirect()->route('admin.goat-types.index')
            ->with('success', 'Jenis kambing berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(GoatType $goatType)
    {
        return Inertia::render('goat-types/show', [
            'goatType' => $goatType
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GoatType $goatType)
    {
        return Inertia::render('admin/goat-types/edit', [
            'goatType' => $goatType
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGoatTypeRequest $request, GoatType $goatType)
    {
        $data = $request->validated();
        
        if ($request->hasFile('image')) {
            if ($goatType->image) {
                Storage::disk('public')->delete($goatType->image);
            }
            $data['image'] = $request->file('image')->store('goat-types', 'public');
        }

        $goatType->update($data);

        return redirect()->route('admin.goat-types.index')
            ->with('success', 'Jenis kambing berhasil diperbarui.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GoatType $goatType)
    {
        if ($goatType->image) {
            Storage::disk('public')->delete($goatType->image);
        }
        
        $goatType->delete();

        return redirect()->route('admin.goat-types.index')
            ->with('success', 'Jenis kambing berhasil dihapus.');
    }
}