import { Router } from "express";
import { saveAppointment, listAppointmentsByUser } from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/listAppointments/:userId", listAppointmentsByUser);

export default router;