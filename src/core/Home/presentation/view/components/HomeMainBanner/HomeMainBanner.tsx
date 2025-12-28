
const HomeMainBanner = () => {
  return (
    <div className="bg-dotted-pattern">
      <img
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google logo"
      />
      {/* Using brand colors */}
      <div className="bg-brand-primary title-1">Primary Brand</div>
      <div className="bg-brand-primary title-1-bold">Primary Brand</div>
      <div className="bg-brand-primary title-1-light">Primary Brand</div>

      <div className="bg-brand-secondary title-2">Secondary Brand</div>
      <div className="bg-brand-secondary title-2-bold">Secondary Brand</div>
      <div className="bg-brand-secondary title-2-light">Secondary Brand</div>

      {/* Using primary colors */}
      <div className="bg-primary-300 heading-1 ">Primary Color</div>
      <div className="bg-primary-300 heading-1-bold">Primary Color</div>
      <div className="bg-primary-300 heading-1-light">Primary Color</div>

      {/* Using secondary colors */}
      <div className="bg-secondary-500 sub-heading-2">Secondary Color</div>
      <div className="bg-secondary-500 sub-heading-2-bold">Secondary Color</div>
      <div className="bg-secondary-500 sub-heading-2-light">
        Secondary Color
      </div>

      {/* Using accent colors */}
      <div className="bg-accent-green-500">Green Accent</div>
      <div className="bg-accent-purple-500">Purple Accent</div>
      <div className="bg-accent-orange-500">Orange Accent</div>

      {/* Using semantic colors */}
      <div className="bg-semantic-success-500 paragraph-1 ">Success</div>
      <div className="bg-semantic-success-500 paragraph-1-semibold">
        Success
      </div>

      <div className="bg-semantic-error-500">Error</div>
      <div className="bg-semantic-warning-500">Warning</div>

      {/* Using surface colors */}
      <div className="bg-surface-50 text-surface-900">Light Surface</div>
      <div className="bg-surface-900 text-surface-50">Dark Surface</div>
    </div>
  );
};

export default HomeMainBanner;
