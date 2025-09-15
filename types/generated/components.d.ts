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
      'components.link': ComponentsLink;
      'components.social-link': ComponentsSocialLink;
      'sections.contact': SectionsContact;
      'sections.hero': SectionsHero;
      'sections.image-gallery': SectionsImageGallery;
      'sections.project-showcase': SectionsProjectShowcase;
      'sections.text-block': SectionsTextBlock;
    }
  }
}
