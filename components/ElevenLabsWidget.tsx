'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface ElevenLabsWidgetProps {
  agentId: string;
}

export default function ElevenLabsWidget({ agentId }: ElevenLabsWidgetProps) {
  useEffect(() => {
    // Create and append the widget element
    const widgetElement = document.createElement('elevenlabs-convai');
    widgetElement.setAttribute('agent-id', agentId);
    document.body.appendChild(widgetElement);

    // Cleanup function to remove the widget when component unmounts
    return () => {
      widgetElement.remove();
    };
  }, [agentId]);

  return (
    <Script
      src="https://elevenlabs.io/convai-widget/index.js"
      strategy="lazyOnload"
      async
    />
  );
}