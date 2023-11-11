from rest_framework import permissions


class IsAdmin(permissions.BasePermission):

    edit_methods = ("PUT", "PATCH")

    def has_permission(self, request, view):
        print(request.user, 'admin')
        if request.user and request.user.is_authenticated and request.user.role=='AD':
            return True
        return False

    def has_object_permission(self, request, view, obj):
        print(request.user, 'object_permi admin')
        if request.user and request.user.is_authenticated and request.user.role=='AD':
            return True
        return bool(request.user == obj.user)




class IsCustomer(permissions.BasePermission):
    method = ['GET']
    def has_permission(self, request, view):
        print(request.user, 'customer')
        if request.user and request.user.is_authenticated and request.user.role=='CS' and request.method in self.method:
            return True
        return False

   

class IsLoanRepresentative(permissions.BasePermission):
    
    def has_permission(self, request, view):
        print(request.user, 'LR')
        if request.user and request.user.is_authenticated and request.user.role=='LR':
            return True
        return False


class LoanPermission(permissions.BasePermission):

    def has_permission(self, request, view): #get, head, options
        print(request.user, 'baki')
        if request.user and request.user.is_authenticated and (request.user.role=='AH' or request.user.role=='OH' or request.user.role=='LO'):
            return True
        return False

    def has_object_permission(self, request, view, obj): # delte, update
        print(request.user, 'object_permi ALL')
        if request.user and request.user.is_authenticated and request.user.role=='AD':
            return True
        return bool(request.user == obj.user)