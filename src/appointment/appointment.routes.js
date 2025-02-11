import { Router } from "express";
import { saveAppointment, listAppointmentsByUser, updateAppointment } from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);
router.get("/listAppointments/:userId", listAppointmentsByUser);
router.put("/updateAppointment/:id", updateAppointment, updateAppointment);

export default router;