import React, { useState } from 'react';
import { Scale, Activity, Brain, Battery, ArrowLeft, CheckCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent } from '../ui/Card';
import EnergyStep1 from './EnergyStep1';
import EnergyStep2 from './EnergyStep2';
import EnergyStep3 from './EnergyStep3';
import EnergyStep4 from './EnergyStep4';
import EnergyStep5 from './EnergyStep5';

// Rest of the component code...

                      {step.isPremium ? (
                        <Link to="/pricing">
                          <Button variant="outline" size="sm">
                            Upgrade to Premium
                          </Button>
                        </Link>
                      ) : (
                        // Rest of the component code...
                      )
                      }