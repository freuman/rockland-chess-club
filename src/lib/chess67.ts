/**
 * Chess67 is the system of record for events, classes, and membership.
 * Everything the site links to or embeds is derived from the club slug below.
 */

export const CLUB_SLUG = 'the-rockland-county-chess-club'

const BASE = 'https://chess67.com'

/** Public pages members land on after leaving the site. */
export const chess67 = {
  club: `${BASE}/club/${CLUB_SLUG}`,
  calendar: `${BASE}/club/${CLUB_SLUG}/calendar`,
  membership: `${BASE}/club/${CLUB_SLUG}/membership`,
} as const

/** Embeddable iframe views. Chess67 supports exactly two modes. */
export const chess67Embed = {
  calendar: `${BASE}/embed/calendar/${CLUB_SLUG}`,
  /**
   * The list view. `limit` caps the number of events, `weeks` the look-ahead window.
   * Note: this view renders times but not dates, so it is used only where the
   * surrounding copy already establishes the timeframe.
   */
  list: (limit: number, weeks: number) =>
    `${BASE}/embed/list/${CLUB_SLUG}?limit=${limit}&weeks=${weeks}`,
} as const

/** Membership tiers as configured on Chess67. Keep in sync with the club's groups. */
export const membershipTiers = [
  {
    name: 'Community Member',
    price: 'Free',
    period: '',
    description: 'Follow the club, see every event, and come to Thursday nights.',
    features: [
      'Full events and tournament calendar',
      'Club announcements and updates',
      'Drop in any Thursday — $10 at the door',
      'Equipment provided (boards, sets, clocks)',
    ],
    recommended: false,
  },
  {
    name: 'Annual Membership',
    price: '$100',
    period: 'per year',
    description: 'Best value if you play with us regularly.',
    features: [
      'Everything in Community, with no door fee',
      'Free adult chess classes',
      'Priority registration for tournaments',
      'Discounted tournament entry fees',
      'Rated tournament play opportunities',
      'Club library and resources',
    ],
    recommended: true,
    saving: 'Saves $20 a year over monthly',
  },
  {
    name: 'Monthly Membership',
    price: '$10',
    period: 'per month',
    description: 'Same benefits, month to month.',
    features: [
      'Everything in the annual membership',
      'Cancel any time',
      'Good way to try a full season',
    ],
    recommended: false,
  },
] as const
