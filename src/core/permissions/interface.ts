export interface PermissionsProps {
    getCheckPermissionAndroid: () => Promise<boolean>;
    getRequestPermissionAndroid: () => Promise<boolean>;
    hasAndroidPermission: () => Promise<boolean>
}