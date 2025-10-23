// type alias declaration
type EmployeeName = string;
type EmployeeId = number;
type EmployeePosition = string;

type Result = string | number | null;

let data: Result = 'Test';

let responseData: Result = 20;

let printSum: Result = 50;

// type alias with string literals

type PaymentMethod = "cash" | "card" | "crypto";

function paymentDetails (ammount: number, method: PaymentMethod) {
    // console.log(`Payment $${ammount} by ${method}`);
}

paymentDetails(20, "cash");

// type alias in interface
type ID = string | number;
type Status = "Open" | "In Progress" | "Done";

interface Ticket {
    id: ID;
    title: string;
    status: string;
}

interface Email {
    id: ID;
    message: string;
}

const email = {
    id: "#4",
    message: 'Hello! I am Miro.'
}

const ticket = {
    id: 1,
    title: 'Send email',
    status: 'Done',
}