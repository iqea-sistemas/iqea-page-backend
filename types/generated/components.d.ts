import type { Schema, Struct } from '@strapi/strapi';

export interface FormsFormAlimentacionAlSistema extends Struct.ComponentSchema {
  collectionName: 'components_forms_form_alimentacion_al_sistemas';
  info: {
    displayName: 'FormAlimentacionAlSistema';
    icon: 'check';
  };
  attributes: {
    AlmacenamientoAguaProducto: Schema.Attribute.Boolean;
    DiametroTuberiaAguaAlimentacion: Schema.Attribute.String;
    DisponibilidadDrenaje: Schema.Attribute.String;
    DistanciaAlturaCisterna: Schema.Attribute.String;
    RequiereRepresurizacionPermeado: Schema.Attribute.Boolean;
    VolumenTotalAlmacenamiento: Schema.Attribute.String;
  };
}

export interface FormsFormAnalisisQuimico extends Struct.ComponentSchema {
  collectionName: 'components_forms_form_analisis_quimicos';
  info: {
    displayName: 'FormAnalisisQuimico';
    icon: 'check';
  };
  attributes: {
    AlcalinidadTotal: Schema.Attribute.String;
    Amoniaco: Schema.Attribute.String;
    BacteriaCFU: Schema.Attribute.String;
    Bario: Schema.Attribute.String;
    Bicarbonatos: Schema.Attribute.String;
    Calcio: Schema.Attribute.String;
    Carbonatos: Schema.Attribute.String;
    Cloro: Schema.Attribute.String;
    CloroResidualLibre: Schema.Attribute.String;
    CO2: Schema.Attribute.String;
    Conductividad: Schema.Attribute.String;
    DurezaTotal: Schema.Attribute.String;
    Estroncio: Schema.Attribute.String;
    Fosfatos: Schema.Attribute.String;
    Hierro: Schema.Attribute.String;
    Magnesio: Schema.Attribute.String;
    Nitratos: Schema.Attribute.String;
    OxidoDeSiliceSiO2: Schema.Attribute.String;
    pH: Schema.Attribute.String;
    Potasio: Schema.Attribute.String;
    Sodio: Schema.Attribute.String;
    Sulfatos: Schema.Attribute.String;
    SulfurosDeHidrogenoSH2: Schema.Attribute.String;
    TDS: Schema.Attribute.String;
    Temperatura: Schema.Attribute.String;
    TSS: Schema.Attribute.String;
    TurbiedadSDI: Schema.Attribute.String;
  };
}

export interface FormsFormCustomerInfo extends Struct.ComponentSchema {
  collectionName: 'components_forms_form_customer_infos';
  info: {
    description: '';
    displayName: 'FormCustomerInfo';
    icon: 'database';
  };
  attributes: {
    Adress: Schema.Attribute.String;
    City: Schema.Attribute.String;
    CompanyName: Schema.Attribute.String;
    CompanyWebPage: Schema.Attribute.String;
    Country: Schema.Attribute.String;
    Email: Schema.Attribute.Email;
    LinkedInProfile: Schema.Attribute.String;
    PhoneNumber: Schema.Attribute.Integer;
    ProjectDescription: Schema.Attribute.Text;
    StateProvinceRegion: Schema.Attribute.String;
    UserLastName: Schema.Attribute.String;
    UserName: Schema.Attribute.String;
    ZipCode: Schema.Attribute.Integer;
  };
}

export interface FormsFormEfluentesRequisito extends Struct.ComponentSchema {
  collectionName: 'components_forms_form_efluentes_requisitos';
  info: {
    description: '';
    displayName: 'FormEfluentesRequisito';
    icon: 'check';
  };
  attributes: {
    Arsenico: Schema.Attribute.String;
    Cadmio: Schema.Attribute.String;
    Cianuro: Schema.Attribute.String;
    Cobre: Schema.Attribute.String;
    Conductividad: Schema.Attribute.String;
    Cromo: Schema.Attribute.String;
    DemandaQuimicaOxigeno: Schema.Attribute.String;
    Flujo: Schema.Attribute.String;
    GrasasYAceites: Schema.Attribute.String;
    Mercurio: Schema.Attribute.String;
    Niquel: Schema.Attribute.String;
    NitrogenoKjeldahlTotal: Schema.Attribute.String;
    OxigenoDisuelto: Schema.Attribute.String;
    pH: Schema.Attribute.String;
    Plomo: Schema.Attribute.String;
    SolidosSuspendidos: Schema.Attribute.String;
    SolidosTotales: Schema.Attribute.String;
    Temperatura: Schema.Attribute.String;
    Zinc: Schema.Attribute.String;
  };
}

export interface FormsFormEspacioMaximoDisponible
  extends Struct.ComponentSchema {
  collectionName: 'components_forms_form_espacio_maximo_disponibles';
  info: {
    displayName: 'FormEspacioMaximoDisponible';
    icon: 'check';
  };
  attributes: {
    Altura: Schema.Attribute.String;
    Ancho: Schema.Attribute.String;
    Largo: Schema.Attribute.String;
  };
}

export interface FormsFormInfluentesNivel extends Struct.ComponentSchema {
  collectionName: 'components_forms_form_influentes_nivels';
  info: {
    description: '';
    displayName: 'FormInfluentesNivel';
    icon: 'check';
  };
  attributes: {
    Arsenico: Schema.Attribute.String;
    Cadmio: Schema.Attribute.String;
    Cianuro: Schema.Attribute.String;
    Cobre: Schema.Attribute.String;
    Conductividad: Schema.Attribute.String;
    Cromo: Schema.Attribute.String;
    DemandaQuimicaOxigeno: Schema.Attribute.String;
    Flujo: Schema.Attribute.String;
    GrasasYAceites: Schema.Attribute.String;
    Mercurio: Schema.Attribute.String;
    Niquel: Schema.Attribute.String;
    NitrogenoKjeldahlTotal: Schema.Attribute.String;
    OxigenoDisuelto: Schema.Attribute.String;
    pH: Schema.Attribute.String;
    Plomo: Schema.Attribute.String;
    SolidosSuspendidos: Schema.Attribute.String;
    SolidosTotales: Schema.Attribute.String;
    Temperatura: Schema.Attribute.String;
    Zinc: Schema.Attribute.String;
  };
}

export interface FormsFormRequisitoAguaTratada extends Struct.ComponentSchema {
  collectionName: 'components_forms_form_requisito_agua_tratadas';
  info: {
    description: '';
    displayName: 'FormRequisitoAguaTratada';
    icon: 'check';
  };
  attributes: {
    DemandaMaximaHorasPico: Schema.Attribute.String;
    HorasDeOperacion: Schema.Attribute.String;
    UsoDelProductoAgua: Schema.Attribute.String;
    VolumenPorDia: Schema.Attribute.String;
    VolumenPorMinuto: Schema.Attribute.String;
  };
}

export interface FormsFuenteAguaAlimentacion extends Struct.ComponentSchema {
  collectionName: 'components_forms_fuente_agua_alimentacions';
  info: {
    description: '';
    displayName: 'FormFuenteAguaAlimentacion';
    icon: 'check';
  };
  attributes: {
    FlujoMaximo: Schema.Attribute.String;
    FlujoMinimo: Schema.Attribute.String;
    FuenteSuministro: Schema.Attribute.String;
    PresenciaCloroLibrePPM: Schema.Attribute.String;
    PresionAguaAlimentacion: Schema.Attribute.String;
    TemperaturaMediaAnual: Schema.Attribute.String;
  };
}

export interface FormsFuenteEnergia extends Struct.ComponentSchema {
  collectionName: 'components_forms_fuente_energias';
  info: {
    description: '';
    displayName: 'FormFuenteEnergia';
    icon: 'check';
  };
  attributes: {
    Ciclos: Schema.Attribute.String;
    Fases: Schema.Attribute.String;
    MaxAmps: Schema.Attribute.String;
    Voltaje: Schema.Attribute.String;
  };
}

export interface GeneralLinkList extends Struct.ComponentSchema {
  collectionName: 'components_general_link_lists';
  info: {
    displayName: 'LinkList';
  };
  attributes: {
    LinkForm: Schema.Attribute.Component<'general.link-slug-name', false>;
  };
}

export interface GeneralLinkSlugName extends Struct.ComponentSchema {
  collectionName: 'components_general_link_slug_names';
  info: {
    displayName: 'LinkSlugName';
    icon: 'link';
  };
  attributes: {
    Available: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    LinkName: Schema.Attribute.String;
    Slug: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'forms.form-alimentacion-al-sistema': FormsFormAlimentacionAlSistema;
      'forms.form-analisis-quimico': FormsFormAnalisisQuimico;
      'forms.form-customer-info': FormsFormCustomerInfo;
      'forms.form-efluentes-requisito': FormsFormEfluentesRequisito;
      'forms.form-espacio-maximo-disponible': FormsFormEspacioMaximoDisponible;
      'forms.form-influentes-nivel': FormsFormInfluentesNivel;
      'forms.form-requisito-agua-tratada': FormsFormRequisitoAguaTratada;
      'forms.fuente-agua-alimentacion': FormsFuenteAguaAlimentacion;
      'forms.fuente-energia': FormsFuenteEnergia;
      'general.link-list': GeneralLinkList;
      'general.link-slug-name': GeneralLinkSlugName;
    }
  }
}
