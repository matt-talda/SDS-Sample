namespace DeveloperSample.Algorithms
{
    public static class Algorithms
    {
        public static int GetFactorial(int n)
        {
            if (n == 0 || n ==1)
                return 1;

            var result = n;
            for (; n > 1; n--)
                result *= (n - 1);

            return result;
        }

        public static string FormatSeparators(params string[] items)
        {
            if (items.Length == 0)
                return string.Empty;
            if (items.Length == 1)
                return items[0];
            return $"{string.Join(", ", items[..^1])} and {items[^1]}";
        }
    }
}