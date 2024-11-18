import { FontAwesome } from '@expo/vector-icons';
export const HomeIcon = ({ color, size }: { color: string; size: number }) => (
  <FontAwesome name='registered' size={size} color={color} />
);

export const InvestIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <FontAwesome name='line-chart' size={size} color={color} />;

export const TransfersIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <FontAwesome name='exchange' size={size} color={color} />;

export const LifestyleIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <FontAwesome name='th' size={size} color={color} />;

export const CryptoIcon = ({
  color,
  size,
}: {
  color: string;
  size: number;
}) => <FontAwesome name='bitcoin' size={size} color={color} />;
