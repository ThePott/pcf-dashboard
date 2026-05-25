// import { activity_unit, ghg_scope } from "@/app/generated/prisma/enums"
// import { PcfInsertionPayloadElement } from "@/app/insert/_types"
// import { Button } from "@/components/ui/button"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuGroup,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { EllipsisVertical } from "lucide-react"
//
// type InputSelectProps = {
//     dictionary: Record<string | number, string>
// }
//
// type ForWhat = Extract<
//     keyof PcfInsertionPayloadElement,
//     "unit" | "scope" | "emission_factor_id" | "activity_category_id" | "activity_description_id"
// >
//
// type WithInputSelect = {
//     forWhat: ForWhat
// }
//
// const ghgScopeToLabel: Record<ghg_scope, string> = {
//     SCOPE_1: "Scope 1",
//     SCOPE_2: "Scope 2",
//     SCOPE_3: "Scope 3",
// }
//
// const activityUnitToLabel: Record<activity_unit, string> = {
//     kWh: "kWh",
//     kg: "kg",
//     ton_km: "ton-km",
// }
//
// const activitiUnitToEmissionFactorUnitLabel: Record<activity_unit, string> = {
//     kWh: "kgCO₂e / kWh",
//     kg: "kgCO₂e / kg",
//     ton_km: "kgCO₂e / ton-km",
// }
//
// const makeEntries = (forWhat: ForWhat) => {
//     switch (forWhat) {
//         case "unit":
//             return activityUnitToLabel
//         case "scope":
//             return ghgScopeToLabel
//         case "emission_factor_id":
//             return activitiUnitToEmissionFactorUnitLabel
//         case "activity_description_id":
//             return ac
//     }
// }
//
// const InputSelect = ({ forWhat }: WithInputSelect) => {
//     return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//                 <Button>
//                     <EllipsisVertical />
//                 </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//                 <DropdownMenuGroup>
//                     {prerequisite.activityCategoryResult.map((category) => (
//                         <DropdownMenuItem key={category.id}>{category.category}</DropdownMenuItem>
//                     ))}
//                 </DropdownMenuGroup>
//             </DropdownMenuContent>
//         </DropdownMenu>
//     )
// }
//
// export default InputSelect
