export const mappRole = (role: string) => {
const roles: any = {
    "research_agent": "Agent de recherche",
}
return roles[role];
}
  
  
//   export const mappRoleStatus = (role: string) => {
//     const roles: any = {
//     "administrator_municipality": "Admin Municipalité",
//     "collaborator_municipality": "Collaborateur Municipalité",
//     "administrator_operation_direction": "Admin Direction Opération",
//     "collaborator_operation_admin": "Collaborateur Direction Opération",
//     "administrator_direction_retablissement": "Admin Direction Rétablissement",
//     "collaborator_direction_retablissement": "Collaborateur Direction Rétablissement",
//     } 
//     return roles[role];
//   }