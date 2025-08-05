<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\GoatType
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string|null $image
 * @property string|null $characteristics
 * @property float|null $weight_range_min
 * @property float|null $weight_range_max
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType query()
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType active()
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType whereCharacteristics($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType whereWeightRangeMax($value)
 * @method static \Illuminate\Database\Eloquent\Builder|GoatType whereWeightRangeMin($value)
 * @method static \Database\Factories\GoatTypeFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class GoatType extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description',
        'image',
        'characteristics',
        'weight_range_min',
        'weight_range_max',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'weight_range_min' => 'float',
        'weight_range_max' => 'float',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active goat types.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}