import { Component, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { hasError: boolean; message: string };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error?.message || 'Unexpected error' };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '50vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
            textAlign: 'center',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', marginBottom: 12 }}>
            Something went wrong
          </h1>
          <p style={{ color: '#5a4a6e', maxWidth: 420, marginBottom: 24 }}>
            This page could not be displayed. Try refreshing, or return to the home page.
          </p>
          <p style={{ fontSize: 12, color: '#8a7a9e', marginBottom: 24 }}>{this.state.message}</p>
          <a
            href="/"
            style={{
              background: '#2d1454',
              color: '#fff',
              padding: '12px 22px',
              borderRadius: 8,
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Back to home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}
