import { format, parseISO } from "date-fns";

const dateString = "2022-01-01T01:00:01Z";
const datePart = dateString.split("T")[0];
const dateString2 = `${datePart}T00:00:00`;

console.log("datePart: ", datePart);

const d = new Date("2022-01-01T01:00:01Z");

const d2 = new Date(dateString2);

const d3 = parseISO(dateString2);

debugger;

console.log("d: ", d);

const e = format(d, "LLLL");

console.log("e: ", e);
