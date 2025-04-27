import { Schema, Types, model } from 'mongoose';

const planetSchema = new Schema({
  name: {
    en: {
      type: String,
      minLength: [3, 'Name should be at least 3 characters long.'],
      required: [true, 'Name is required.'],
    },
    bg: {
      type: String,
      minLength: [3, 'Името трябва да бъде поне 3 символа.'],
      required: [true, 'Името е задължително.'],
    }
  },
  type: {
    en: {
      type: String,
      required: [true, 'Type is required.'],
      enum: {
        values: ['Star', 'Planet'],
        message: 'Type must be one of: Star, Planet',
      }
    },
    bg: {
      type: String,
      required: [true, 'Типа е задължителен.'],
      enum: {
        values: ['Звезда', 'Планета'],
        message: 'Типа трябва да е: Звезда, Планета',
      }
    }
  },
  moons: {
    en: {
      type: Number,
      required: [true, 'Moons is required.'],
    },
    bg: {
      type: Number,
      required: [true, 'Луната е задължителна.'],
    }
  },
  years: {
    en: {
      type: String,
      required: [true, 'Years is required.'],
    },
    bg: {
      type: String,
      required: [true, 'Годините са задължителни.'],
    }
  },
  atmosphere: {
    en: {
      type: String,
      required: [true, 'Atmosphere is required.'],
    },
    bg: {
      type: String,
      required: [true, 'Атмосферата е задължителна.'],
    }
  },
  fact: {
    en: {
      type: String,
      required: [true, 'Fact is required.'],
    },
    bg: {
      type: String,
      required: [true, 'Фактът е задължителен.'],
    }
  },
  namedAfter: {
    en: {
      type: String,
      required: [true, 'Named after is required.'],
    },
    bg: {
      type: String,
      required: [true, 'Произхода на името е задължително.'],
    }
  },
  image: {
    en: {
      type: String,
    required: [true, 'Image URL is required.'],
    match: [
      /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i,
      'Image must be a valid URL ending with .jpg, .jpeg, .png, .gif, .webp, or .svg',
    ]
    },
    bg: {
      type: String,
    required: [true, 'Адресът на снимката е задължителен.'],
    match: [
      /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp|svg)$/i,
      'Картинката трябва да бъде валиден URL завършващ на .jpg, .jpeg, .png, .gif, .webp, или .svg',
    ],
    }
  },
  distanceToSun: {
    en: {
      type: String,
      required: [true, 'Distance to Sun is required.'],
    },
    bg: {
      type: String,
      required: [true, 'Разстоянието до Слънцето е задължително.'],
    }
  },
  size: {
    en: {
      type: String,
      required: [true, 'Size is required.'],
    },
    bg: {
      type: String,
      required: [true, 'Размерът е задължителен.'],
    }
  },
  description: {
    en: {
      type: String,
    minLength: [10, 'Description should be at least 10 characters long.'],
    required: [true, 'Description is required.'],
    },
    bg: {
      type: String,
    minLength: [10, 'Описанието трябва да бъде поне 10 символа.'],
    required: [true, 'Описанието е задължително.']
    }
  },
  order: {
    en: {
      type: Number,
      required: [true, 'Order is required.']
    },
    bg: {
      type: Number,
      required: [true, 'Номерът е задължителен.']
    }
  },
  comments: [
    {
      _id: { type: Types.ObjectId, default: () => new Types.ObjectId() },
      user: { type: Types.ObjectId, ref: 'User' },
      text: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now },
    }
  ],
  ownerId: { type: Types.ObjectId, ref: 'User' },
});

planetSchema.index({ order: 1 });

const Planets = model('Planets', planetSchema);

export default Planets;