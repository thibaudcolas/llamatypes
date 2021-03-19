type UnitSystem = "imperial" | "metric";
/**
 * Centrally defined configuration for unit pairs, to avoid inconsistencies.
 */
const unitPairs = {
  MI_KM: {
    imperial: {
      label: "Miles",
      abbr: "MI",
      toOther: 1 * 1.609344,
    },
    metric: {
      label: "Kilometers",
      abbr: "KM",
      toOther: 1 / 1.609344,
    },
  },
  LB_KG: {
    imperial: {
      label: "Pounds",
      abbr: "LB",
      toOther: 1 / 2.205,
    },
    metric: {
      label: "Kilograms",
      abbr: "KG",
      toOther: 1 * 2.205,
    },
  },
  G_OZ: {
    imperial: {
      label: "Ounces",
      abbr: "OZ",
      toOther: 1 / 0.0352739331766097,
    },
    metric: {
      label: "Grams",
      abbr: "G",
      toOther: 1 * 0.0352739331766097,
    },
  },
  M_FT: {
    imperial: {
      label: "Feet",
      abbr: "FT",
      toOther: 1 * 0.3048,
    },
    metric: {
      label: "Meters",
      abbr: "M",
      toOther: 1 / 0.3048,
    },
  },
  MS_FS: {
    imperial: {
      label: "Feet per second",
      abbr: "FT/S",
      toOther: 1 * 0.3048,
    },
    metric: {
      label: "Meters per second",
      abbr: "M/S",
      toOther: 1 / 0.3048,
    },
  },
} as const;
type UnitPair = keyof typeof unitPairs;
type UnitConfig = typeof unitPairs[UnitPair];

const formattedValue = (unitPair, valueSystem, selectedSystem, value) => {
  console.log(
    `from ${valueSystem} value to ${selectedSystem}, in units ${unitPair}`
  );
  // Display the value as-is if it is in the requested unit, otherwise convert it.
  const unitConfig = unitPairs[unitPair];
  const selectedValue =
    valueSystem === selectedSystem
      ? value
      : value * unitConfig[valueSystem].toOther;
  // By default, show values with the same precision as the format they are provided in.
  const decimals = value.toString().split(".")[1]?.length || 0;
  return selectedValue.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

console.log(formattedValue("MI_KM", "imperial", "metric", 384_400));
console.log(formattedValue("MI_KM", "metric", "metric", 384_400));
console.log(formattedValue("MI_KM", "metric", "imperial", 384_400));
