<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use App\Http\Requests\Permissions\CreateRoleRequest;
use App\Models\PermissionCategory;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use DB;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Role::paginate();
        return inertia('Roles/Index', compact('roles'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Roles/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateRoleRequest $request)
    {
        Role::create([
            'name' => $request->name,
        ]);

        flashMessage('New Role Created Successfully!', 'success');

        return redirect(route('roles.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        DB::beginTransaction();
        try {
            $role = Role::withCount('users')->where('id', $id)->firstOrFail();
            if ($role->users_count > 0) {
                flashMessage('This Role cannot be deleted because it has users attached!', 'error');
                return back();
            }
            $role->delete();

            DB::commit();
            flashMessage('Role deleted successfully!', 'success');
            return back();
        } catch (\Exception $e) {
            DB::rollback();
            flashMessage('Something went wrong!', 'error');
            return back();
        }
    }

    public function rolePermissions($id)
    {
        $categories = PermissionCategory::with('permissions')->get();
        $role = Role::where('id', $id)->firstOrFail();
        $rolePermissions = $role->permissions->pluck('id');
        return inertia('Permissions/RolePermissions', compact('role', 'categories', 'rolePermissions'));
    }

    public function updateRolePermissions(Request $request, $id)
    {
        try {
            $role = Role::where('id', $id)->firstOrFail();
            $permissions = Permission::whereIn('id', $request->permissions)->get();
            $role->syncPermissions($permissions);

            flashMessage($role->name . ' Permissions updated successfully!', 'success');
            return back();
        } catch (\Exception $e) {
            flashMessage('Something went wrong!', 'error');
            return back();
        }
    }
}
