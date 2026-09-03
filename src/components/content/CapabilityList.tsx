import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { SignalPoint } from "@/components/signals/SignalPoint";
import { profile } from "@/content/site";

export function CapabilityList() {
  return (
    <RevealGroup as="ul" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {profile.capabilities.map((cluster, index) => (
        <RevealItem as="li" key={cluster.title} index={index} className="border-t border-line pt-6">
          <h3 className="font-display text-h3 text-charcoal">{cluster.title}</h3>
          <ul className="mt-4 space-y-3">
            {cluster.items.map((item) => (
              <li key={item} className="flex gap-3 text-small text-charcoal-soft">
                <SignalPoint className="mt-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
