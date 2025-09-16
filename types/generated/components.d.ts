import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsButton extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface ComponentsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_components_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ComponentsLink extends Struct.ComponentSchema {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
    icon: 'cursor';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ComponentsServices extends Struct.ComponentSchema {
  collectionName: 'components_components_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_components_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'cursor';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionsCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_sections_case_studies';
  info: {
    displayName: 'Case Study';
  };
  attributes: {
    achievements: Schema.Attribute.RichText;
    challenges: Schema.Attribute.RichText;
    overview: Schema.Attribute.Text;
    results: Schema.Attribute.RichText;
    skills: Schema.Attribute.Relation<'oneToMany', 'api::skill.skill'>;
    solution: Schema.Attribute.RichText;
    tasks: Schema.Attribute.RichText;
  };
}

export interface SectionsContact extends Struct.ComponentSchema {
  collectionName: 'components_sections_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    cta_buttons: Schema.Attribute.Component<'components.button', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaQs extends Struct.ComponentSchema {
  collectionName: 'components_sections_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    faq: Schema.Attribute.Component<'components.faq-item', true>;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    cta_buttons: Schema.Attribute.Component<'components.button', true>;
    headline: Schema.Attribute.String;
    subheadline: Schema.Attribute.Text;
  };
}

export interface SectionsImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_galleries';
  info: {
    displayName: 'Image Gallery';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    approach: Schema.Attribute.Text;
    bio: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    experience: Schema.Attribute.Relation<
      'oneToOne',
      'api::experience.experience'
    >;
  };
}

export interface SectionsProjectShowcase extends Struct.ComponentSchema {
  collectionName: 'components_sections_project_showcases';
  info: {
    displayName: 'Project Showcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    projects: Schema.Attribute.Relation<'oneToMany', 'api::project.project'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_blocks';
  info: {
    displayName: 'Text Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.button': ComponentsButton;
      'components.faq-item': ComponentsFaqItem;
      'components.link': ComponentsLink;
      'components.services': ComponentsServices;
      'components.social-link': ComponentsSocialLink;
      'sections.case-study': SectionsCaseStudy;
      'sections.contact': SectionsContact;
      'sections.fa-qs': SectionsFaQs;
      'sections.hero': SectionsHero;
      'sections.image-gallery': SectionsImageGallery;
      'sections.info': SectionsInfo;
      'sections.project-showcase': SectionsProjectShowcase;
      'sections.text-block': SectionsTextBlock;
    }
  }
}
