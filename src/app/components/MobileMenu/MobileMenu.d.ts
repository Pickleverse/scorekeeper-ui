type MobileMenuLink = {
  label: string;
  href: string;
  onClick?: () => void;
}

type MobileMenuProps = {
  brandName?: string;
  brandHref?: string;
  links?: MobileMenuLink[];
  className?: string;
  iconClassName?: string;
  menuClassName?: string;
}
export { MobileMenuProps, MobileMenuLink };