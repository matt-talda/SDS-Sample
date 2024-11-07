using System;

namespace DeveloperSample.ClassRefactoring
{
    public enum SwallowType
    {
        African = 22, European = 20
    }

    public enum SwallowLoad
    {
        None = 0, Coconut = 4
    }

    public class SwallowFactory
    {
        public Swallow GetSwallow(SwallowType swallowType) => new(swallowType);
    }

    public class Swallow(SwallowType swallowType)
    {
        public SwallowType Type { get; } = swallowType;
        public SwallowLoad Load { get; private set; } = SwallowLoad.None;

        public void ApplyLoad(SwallowLoad load)
        {
            Load = load;
        }

        public double GetAirspeedVelocity()
        {
            return (double)Type - (double)Load;
        }
    }
}