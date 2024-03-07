import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message };
    }

    // componentDidCatch(error, errorInfo) {
    //     // You can log the error

    //     console.error('Error:', error);
    //     console.error('Error Info:', errorInfo);
    //     // this.setState({ errorMessage: error.message });
    // }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    {this.props?.fallback ? (
                        <p>{this.props.fallback}</p>
                    ) : (
                        <h2>
                            Something went wrong. Please try again later.
                            {this.state.errorMessage}
                        </h2>
                    )}
                </>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;