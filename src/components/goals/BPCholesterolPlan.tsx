import React, { useState } from 'react';
import { Scale, Activity, Brain, Heart, ArrowLeft, CheckCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card, { CardContent } from '../ui/Card';
import BPCholesterolStep1 from './BPCholesterolStep1';
import BPCholesterolStep2 from './BPCholesterolStep2';
import BPCholesterolStep3 from './BPCholesterolStep3';
import BPCholesterolStep4 from './BPCholesterolStep4';
import BPCholesterolStep5 from './BPCholesterolStep5';

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