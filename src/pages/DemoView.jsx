import { Navigate, useParams } from "react-router-dom";
import { getWebsiteById } from "../data/websites";

import DemoSoraHouse from "../demos/SoraHouse";
import DemoNorthline from "../demos/Northline";
import DemoKairo from "../demos/Kairo";
import DemoArcSupply from "../demos/ArcSupply";
import DemoForma from "../demos/Forma";
import DemoFieldNotes from "../demos/FieldNotes";
import DemoMonoStudio from "../demos/MonoStudio";
import DemoEmberGrain from "../demos/EmberGrain";
import DemoVellore from "../demos/Vellore";
import DemoHealwise from "../demos/Healwise";
import DemoLedgerPine from "../demos/LedgerPine";
import DemoOpenlot from "../demos/Openlot";
import DemoMeridian from "../demos/Meridian";
import DemoTheDayOf from "../demos/TheDayOf";
import DemoHallow from "../demos/Hallow";
import DemoAtelierNine from "../demos/AtelierNine";

const REGISTRY = {
  "sora-house": DemoSoraHouse,
  northline: DemoNorthline,
  kairo: DemoKairo,
  "arc-supply": DemoArcSupply,
  forma: DemoForma,
  "field-notes": DemoFieldNotes,
  "mono-studio": DemoMonoStudio,
  "ember-grain": DemoEmberGrain,
  vellore: DemoVellore,
  healwise: DemoHealwise,
  "ledger-pine": DemoLedgerPine,
  openlot: DemoOpenlot,
  meridian: DemoMeridian,
  "the-day-of": DemoTheDayOf,
  hallow: DemoHallow,
  "atelier-nine": DemoAtelierNine,
};

export default function DemoView() {
  const { id } = useParams();
  const website = getWebsiteById(id);
  if (!website || !REGISTRY[id]) return <Navigate to="/websites" replace />;
  const Demo = REGISTRY[id];
  return <Demo />;
}
