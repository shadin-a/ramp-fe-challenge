import { Employee } from "./types"

export const EMPTY_EMPLOYEE: Employee = {
  //THIS IS A BANDAID FIX, IN LIEU OF CHANGING THE FORMAT FOR REQUESTS. NEGATIVE NUMBER USED TO AVOID 'ACTUAL' EMPLOYEE IDS FROM CORESSPONDING WITH EMPTY EMPLOYEE ID.
  id: "-1",
  firstName: "All",
  lastName: "Employees",
}
