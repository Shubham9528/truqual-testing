import {
  Shield,
  Monitor,
  Wrench,
  FlaskConical,
  ClipboardCheck,
  GraduationCap,
  Radar,
  FileCheck2,
  Layers3,
} from "lucide-react";

export const services = [
  { icon: Wrench, title: "Process Validation", desc: "Full lifecycle validation including prospective, concurrent, and retrospective approaches with complete documentation." },
  { icon: Monitor, title: "Computer System Validation", desc: "GAMP 5-based CSV for ERP, LIMS, DCS, SCADA and all GxP-critical computerized systems." },
  { icon: Shield, title: "Equipment Qualification", desc: "IQ, OQ, PQ and DQ protocols for manufacturing equipment, utilities, and lab instruments." },
  { icon: FlaskConical, title: "Method Validation", desc: "Analytical method validation per ICH Q2(R1) ” accuracy, precision, specificity, linearity." },
  { icon: ClipboardCheck, title: "Regulatory Compliance", desc: "Mock inspections, gap assessments, and pre-regulatory audit preparations aligned with global standards." },
  { icon: GraduationCap, title: "Training & Workshops", desc: "Customized programs on GMP, GDP, validation best practices, and regulatory requirements." },
];

export const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "47", label: "Enterprise Clients" },
  { value: "98.3%", label: "Audit Pass Rate" },
  { value: "15+", label: "Years Expertise" },
];

export const processSteps = [
  {
    step: "01",
    title: "Assess & Map",
    desc: "We review your facility, systems, and regulatory obligations to define a practical validation roadmap.",
  },
  {
    step: "02",
    title: "Document & Execute",
    desc: "Our team builds protocols, executes qualification activities, and captures evidence with inspection-ready rigor.",
  },
  {
    step: "03",
    title: "Sustain & Improve",
    desc: "We close gaps, train stakeholders, and support long-term compliance through change control and periodic review.",
  },
];

export const truqualvesPillars = [
  {
    title: "Precision-Led Strategy",
    desc: "Every validation path is shaped around your process risk, system complexity, and inspection exposure rather than generic templates.",
    icon: Radar,
  },
  {
    title: "Documentation That Holds",
    desc: "Protocols, evidence, and approvals are built to remain readable, traceable, and defensible long after project handoff.",
    icon: FileCheck2,
  },
  {
    title: "Execution With Control",
    desc: "We align engineering, quality, and operations so qualification work moves quickly without weakening compliance discipline.",
    icon: Layers3,
  },
];

export const deliverables = [
  "Validation master plans aligned to your site and product risk profile",
  "IQ/OQ/PQ, CSV, and method validation protocols with traceable evidence",
  "Gap assessments and remediation plans for inspections and audits",
  "Standard operating procedures and training support for operational readiness",
];
