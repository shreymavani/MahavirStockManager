export enum Category  {
  CREAM ="Cream",
  TOOTHBRUSH ="ToothBrush",
  SOAP ="Soap",
  TALC_POWDER ="Talc Powder",
  OTHER ="Other",
  NA = "NA",
}

export enum Type {
  TUBE = "Tube",
  OTHER = "Other",
  SHRINK = "Shrink",
  MONOBOX = "Monobox",
  STICKER = "Sticker",
  WRAPPER = "Wrapper",
  CAP = "Cap",
  OUTERCARTON = "Outercarton",
  STIFFNER = "Stiffner",
  BOTTLE = "Bottle",
  POUCHROLL = "Pouchroll",
  LEAFLET = "Leaflet",
  NA = "NA",
}

export const INWARD_FORM_DEFAULT_STATE = {
  itemName: '',
  emailAddress: '',
  sign: '',
  category: Category.CREAM,
  box: 0,
  unitPerBox: 0,
  looseUnits: 0,
  storageRoom: '',
  vehicle: '',
  unloadingVehicle: '',
  type: Type.TUBE
}