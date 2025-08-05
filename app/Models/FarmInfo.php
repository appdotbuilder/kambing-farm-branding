<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\FarmInfo
 *
 * @property int $id
 * @property string $title
 * @property string $description
 * @property string|null $history
 * @property string|null $location
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $vision
 * @property string|null $mission
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo query()
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo whereHistory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo whereMission($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|FarmInfo whereVision($value)
 * @method static \Database\Factories\FarmInfoFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class FarmInfo extends Model
{
    use HasFactory;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'farm_info';

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'title',
        'description',
        'history',
        'location',
        'phone',
        'email',
        'vision',
        'mission',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}