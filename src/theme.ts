export interface Theme {
  space: (number | string)[];

  colors: {
    background: string;
    backgroundSecondary: string;
    backgroundElevated: string;

    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textOnPrimary: string;
    textLink: string;

    primary: string;
    primaryHover: string;
    primaryActive: string;

    success: string;
    successHover: string;
    successBackground: string;

    error: string;
    errorHover: string;
    errorBackground: string;

    warning: string;
    warningHover: string;
    warningBackground: string;

    info: string;
    infoBackground: string;

    border: string;
    borderDark: string;

    buttonPrimary: string;
    buttonPrimaryHover: string;
    buttonPrimaryText: string;

    buttonSecondary: string;
    buttonSecondaryHover: string;
    buttonSecondaryText: string;

    buttonDanger: string;
    buttonDangerHover: string;
    buttonDangerText: string;
  };

  radii: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    pill: string;
  };

  shadows: {
    none: string;
    sm: string;
    md: string;
    lg: string;
  };

  zIndices: {
    dropdown: number;
    modal: number;
    tooltip: number;
  };

  fonts: {
    body: string;
    mono: string;
  };

  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
  };

  fontWeights: {
    slim: number;
    normal: number;
    thick: number;
  };
}

export const lightTheme: Theme = {
  space: [0, '4px', '8px', '16px', '24px', '32px', '48px', '64px'],

  colors: {
    // Backgrounds
    background: '#ffffff',
    backgroundSecondary: '#f9f9f9',
    backgroundElevated: '#ffffff',

    // Text
    textPrimary: '#111111',
    textSecondary: '#666666',
    textTertiary: '#999999',
    textOnPrimary: '#ffffff',
    textLink: '#0070f3',

    // Primary (Action)
    primary: '#0070f3',
    primaryHover: '#005ad1',
    primaryActive: '#004bb5',

    // Success / Error / Warning
    success: '#2ecc71',
    successHover: '#27ae60',
    successBackground: '#eafaf1',
    error: '#e74c3c',
    errorHover: '#c0392b',
    errorBackground: '#fdecea',
    warning: '#f39c12',
    warningHover: '#d68910',
    warningBackground: '#fff4e5',
    info: '#3498db',
    infoBackground: '#eaf6fd',

    // Borders / Lines
    border: '#e0e0e0',
    borderDark: '#cccccc',

    // Buttons
    buttonPrimary: '#0070f3',
    buttonPrimaryHover: '#005ad1',
    buttonPrimaryText: '#ffffff',

    buttonSecondary: '#f4f4f4',
    buttonSecondaryHover: '#e2e2e2',
    buttonSecondaryText: '#000000',

    buttonDanger: '#e74c3c',
    buttonDangerHover: '#c0392b',
    buttonDangerText: '#ffffff',
  },

  radii: {
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
    pill: '9999px',
  },

  shadows: {
    none: 'none',
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.15)',
  },

  zIndices: {
    dropdown: 1000,
    modal: 1100,
    tooltip: 1200,
  },

  fonts: {
    body: 'Inter, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },

  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '32px',
  },

  fontWeights: {
    slim: 300,
    normal: 400,
    thick: 700,
  },
};

export const darkTheme: Theme = {
  space: [0, '4px', '8px', '16px', '24px', '32px', '48px', '64px'],

  colors: {
    // Backgrounds
    background: '#121212', // Main app background
    backgroundSecondary: '#1e1e1e', // Panels, cards, list items
    backgroundElevated: '#2a2a2a', // Modals, popovers

    // Text
    textPrimary: '#ffffff', // Main content text
    textSecondary: '#cccccc', // Secondary labels
    textTertiary: '#999999', // Hints, disabled text
    textOnPrimary: '#ffffff', // Text on primary button
    textLink: '#0070f3',

    // Primary (Action)
    primary: '#3399ff', // Lighter blue for contrast
    primaryHover: '#1a8cff',
    primaryActive: '#0066cc',

    // Semantic
    success: '#27ae60',
    successHover: '#219653',
    successBackground: '#163e2b',

    error: '#e74c3c',
    errorHover: '#c0392b',
    errorBackground: '#4d1c16',

    warning: '#f39c12',
    warningHover: '#d68910',
    warningBackground: '#4a3510',

    info: '#3498db',
    infoBackground: '#1b2a36',

    // Borders / Lines
    border: '#333333',
    borderDark: '#444444',

    // Buttons
    buttonPrimary: '#3399ff',
    buttonPrimaryHover: '#1a8cff',
    buttonPrimaryText: '#ffffff',

    buttonSecondary: '#2e2e2e',
    buttonSecondaryHover: '#3a3a3a',
    buttonSecondaryText: '#ffffff',

    buttonDanger: '#e74c3c',
    buttonDangerHover: '#c0392b',
    buttonDangerText: '#ffffff',
  },

  radii: {
    none: '0',
    sm: '2px',
    md: '4px',
    lg: '8px',
    pill: '9999px',
  },

  shadows: {
    none: 'none',
    sm: '0 1px 2px rgba(0,0,0,0.3)',
    md: '0 4px 6px rgba(0,0,0,0.4)',
    lg: '0 10px 15px rgba(0,0,0,0.5)',
  },

  zIndices: {
    dropdown: 1000,
    modal: 1100,
    tooltip: 1200,
  },

  fonts: {
    body: 'Inter, system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },

  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    xxl: '32px',
  },

  fontWeights: {
    slim: 300,
    normal: 400,
    thick: 700,
  },
};
