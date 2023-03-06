<?php

namespace App\Actions;

use Spatie\Permission\Models\Role;

class GetRoles
{
    public function handle()
    {
        return Role::paginate();
    }
}
