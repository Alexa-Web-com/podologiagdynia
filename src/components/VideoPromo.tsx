import myVideo from "../assets/video3.mp4";
import logo from "../assets/logo.png";
import { useState } from "react";

const VideoPromo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  return (
    <section id="video" className="pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Zapraszamy do gabinetu
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zobacz jak wygląda wizyta w naszym gabinecie podologicznym
          </p>
        </div>

        <div className="max-w-sm mx-auto animate-fade-in">
          <div className="relative aspect-9/16 rounded-2xl overflow-hidden bg-muted shadow-lg border border-border">
            <video
              className="w-full h-full object-cover"
              controls
              onCanPlay={() => setIsVideoLoaded(true)}
            >
              <source src={myVideo} type="video/mp4" />
            </video>

            {!isVideoLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/80 px-4 ...">
                <img src={logo} alt="logo" />
                <p className="text-lg text-muted-foreground">
                  Film promocyjny wkrótce
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPromo;
