
import { supabase } from "@/integrations/supabase/client";

export const useTrackButtonClick = () => {
  const trackClick = async (buttonName: string, language: string) => {
    try {
      await supabase
        .from('button_clicks')
        .insert([
          { button_name: buttonName, language }
        ]);
    } catch (error) {
      console.error('Error tracking button click:', error);
    }
  };

  return { trackClick };
};
